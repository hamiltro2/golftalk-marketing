import fitz  # PyMuPDF
import sys

pdf_path = r"C:\Users\hamil\golftalk\The_Always_On_Pro_Shop.pdf"
try:
    doc = fitz.open(pdf_path)
    print(f"Total pages: {len(doc)}")
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        print(f"\n--- Page {page_num + 1} ---")
        text = page.get_text()
        print("TEXT:", text.strip())
        
        # Information about images
        image_list = page.get_images(full=True)
        if image_list:
            print(f"IMAGES FOUND: {len(image_list)}")
        
except Exception as e:
    print(f"Error: {e}")
