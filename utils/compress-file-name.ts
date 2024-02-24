export default function compressAndPrefixFileName(fileName: string): string {
  // Define the maximum length for the compressed file name
  const maxFileNameLength = 10;

  // Extract the extension from the fileName
  const fileExtension = fileName.split(".").pop() || "";
  const fileNameWithoutExtension = fileName.slice(0, -fileExtension.length - 1);

  // Check if the fileName is longer than the maximum length
  if (fileName.length > maxFileNameLength) {
    // Calculate the length of characters to keep in the middle
    const charsToKeep = maxFileNameLength - fileExtension.length - 5; // 5 for [FlexFile] and 2 dots

    // Create the compressed fileName
    const compressedFileName =
      "[FlexFile]" +
      fileNameWithoutExtension.substring(0, charsToKeep) +
      "..." +
      fileNameWithoutExtension.slice(-2) +
      "." +
      fileExtension;

    return compressedFileName;
  } else {
    // If the fileName is shorter than or equal to the maximum length, return it as is
    return "[FlexFile]" + fileNameWithoutExtension + "." + fileExtension;
  }
}
