import os
import sys
import warnings
import urllib3
from google.cloud import texttospeech

# Ignore the NotOpenSSLWarning if it appears (related to SSL certificate handling)
warnings.filterwarnings("ignore", category=urllib3.exceptions.NotOpenSSLWarning)

# --- Helper function for synthesizing and saving audio ---
def _synthesize_and_save(client, mp3_filename, ssml_content):
    """
    Synthesizes SSML content to an MP3 file and saves it to the specified directory.
    """
    # Define your target output directory relative to where the script is run
    output_directory = "../audio"

    # Ensure the output directory exists; create it if it doesn't
    os.makedirs(output_directory, exist_ok=True)

    # Construct the full path for the MP3 file
    full_mp3_path = os.path.join(output_directory, mp3_filename)

    print(f"Synthesizing '{full_mp3_path}' from SSML...")
    print(f"  SSML content snippet: {ssml_content[:100]}...") # Print first 100 chars for debugging

    # Set the text input to be synthesized
    synthesis_input = texttospeech.SynthesisInput(ssml=ssml_content)

    # Build the voice request: Italian language, neutral gender
    voice = texttospeech.VoiceSelectionParams(
        language_code="it-IT", # Italian language code
        ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )

    # Select the type of audio file (MP3) and set speaking rate
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        speaking_rate=0.5  # Set to 0.5 for 50% slower speed
    )

    try:
        # Perform the text-to-speech request
        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )

        # The response's audio_content is binary. Write it to the file.
        with open(full_mp3_path, "wb") as out:
            out.write(response.audio_content)
        print(f"Audio content written to file '{full_mp3_path}'")
    except Exception as e:
        print(f"Error synthesizing audio for '{full_mp3_path}': {e}")
        print(f"Problematic SSML: {ssml_content}")


# --- Main processing function for the SSML text file ---
def synthesize_ssml_to_mp3(ssml_text_path):
    """
    Reads SSML text from a file, parses it into blocks,
    and synthesizes each block into a separate MP3 file.
    """
    print(f"DEBUG: Starting synthesize_ssml_to_mp3 for path: {ssml_text_path}")

    # Initialize the Google Cloud Text-to-Speech client
    client = texttospeech.TextToSpeechClient()
    print("DEBUG: Google Cloud Text-to-Speech client initialized.")

    # Read the content of the SSML text file
    try:
        with open(ssml_text_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print(f"DEBUG: Successfully read {len(lines)} lines from SSML file.")
    except FileNotFoundError:
        print(f"Error: SSML text file not found at '{ssml_text_path}'")
        return
    except Exception as e:
        print(f"Error reading SSML text file: {e}")
        return

    current_mp3_filename = None
    current_ssml_block = []

    # Process each line in the SSML file
    for line_num, original_line in enumerate(lines):
        line = original_line.strip() # Remove leading/trailing whitespace including newlines

        print(f"DEBUG: Processing line {line_num + 1}: '{original_line.strip()}'")
        print(f"DEBUG: Cleaned line for check: '{line}'")
        print(f"DEBUG: Does line contain '==========': {'==========' in line}") # Check for presence, not endswith
        print(f"DEBUG: Raw line representation (repr): {repr(line)}")

        # Skip empty lines
        if not line:
            print(f"DEBUG: Line {line_num + 1} is empty, skipping.")
            continue

        # Check if the line is a header indicating a new MP3 file
        if '==========' in line:
            print(f"DEBUG: Found header separator '==========' in line {line_num + 1}: '{line}'")

            # If there was a previous block, synthesize and save it
            if current_mp3_filename and current_ssml_block:
                print(f"DEBUG: Processing previous block for '{current_mp3_filename}'...")
                _synthesize_and_save(client, current_mp3_filename, "".join(current_ssml_block))

            # Start a new block: extract the MP3 filename from the current header line
            # The filename is the part before '=========='
            current_mp3_filename = line.split('==========')[0].strip()
            current_ssml_block = [] # Reset SSML block for the new file
            print(f"DEBUG: New block started. Next MP3 filename will be: '{current_mp3_filename}'")
        else:
            # If not a header, it's SSML content; append it to the current block
            current_ssml_block.append(line + "\n")
            print(f"DEBUG: Appending to current SSML block: '{line[:50]}...'")

    print("DEBUG: Finished processing all lines in SSML file.")
    # After the loop, process any remaining SSML content for the last block
    if current_mp3_filename and current_ssml_block:
        print(f"DEBUG: Processing final block for '{current_mp3_filename}'...")
        _synthesize_and_save(client, current_mp3_filename, "".join(current_ssml_block))
    else:
        print("DEBUG: No final block to process or block is empty.")


# --- Main execution block ---
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 gen_audio.py <ssml_text_file_path>")
        print("Example: python3 gen_audio.py output_ssml.txt")
        sys.exit(1)

    ssml_file_path = sys.argv[1]
    print(f"DEBUG: Script starting. Input SSML file path: {ssml_file_path}")
    synthesize_ssml_to_mp3(ssml_file_path) # Call the main function
    print("DEBUG: Script finished.")
