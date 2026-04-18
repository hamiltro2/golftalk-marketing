import sys

try:
    from PIL import Image
except ImportError:
    import pip
    pip.main(['install', 'Pillow'])
    from PIL import Image

def remove_background(img_path, out_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    new_data = []
    # If the pixel is very light/white, make it transparent
    for item in datas:
        # item is (R, G, B, A)
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(out_path, "PNG")
    print(f"Saved transparent logo to {out_path}")

in_file = r"C:\Users\hamil\golftalk\public\images\golf\logo_sphere.png"
out_file = r"C:\Users\hamil\golftalk\public\images\golf\logo_transparent.png"
remove_background(in_file, out_file)
