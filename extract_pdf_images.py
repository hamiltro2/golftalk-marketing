import fitz  # PyMuPDF
import os

pdf_path = r"C:\Users\hamil\golftalk\The_Always_On_Pro_Shop.pdf"
out_dir = r"C:\Users\hamil\golftalk\public\images\golf"
os.makedirs(out_dir, exist_ok=True)

try:
    doc = fitz.open(pdf_path)
    # Render at a very high resolution (300 DPI equivalent)
    # The default zoom is 1.0 (72 DPI). 4.0 gives ~288 DPI.
    zoom = 4.0
    mat = fitz.Matrix(zoom, zoom)
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        pix = page.get_pixmap(matrix=mat, alpha=False)
        img_path = os.path.join(out_dir, f"page{page_num+1}_highres.png")
        pix.save(img_path)
        print(f"Saved High-Res Page: {img_path}")

except Exception as e:
    print(f"Error: {e}")
