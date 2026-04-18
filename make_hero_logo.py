import sys
from PIL import Image

def convert_to_glow_logo(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Calculate luma
        r, g, b, a = item
        luma = (0.299*r + 0.587*g + 0.114*b)
        
        if luma > 230:
            # It's the white background -> Make transparent
            new_data.append((255, 255, 255, 0))
        else:
            # It's the dark green logo
            # Since the user wants it to POP on a dark BG, we make it PURE WHITE or NEON GREEN.
            # Let's make the logo itself pure white. The CSS glow will color it!
            # The darker the pixel, the more opaque it should be.
            alpha = max(0, 255 - int(luma))
            new_data.append((255, 255, 255, alpha))

    img.putdata(new_data)
    img.save(out_path, "PNG")
    print(f"Saved true white transparent logo to {out_path}")

in_file = r"C:\Users\hamil\golftalk\public\images\golf\logo_sphere.png"
out_file = r"C:\Users\hamil\golftalk\public\images\golf\logo_hero_glow.png"
convert_to_glow_logo(in_file, out_file)
