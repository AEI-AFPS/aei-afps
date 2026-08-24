import numpy as np
from PIL import Image

def process_image(in_path, out_path):
    img = Image.open(in_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    # Calculate max brightness per pixel
    max_val = np.max(data[:,:,:3], axis=2)
    
    # Create an alpha channel using the max brightness (smooth transition)
    # We map 0-20 to 0 (transparent) and >20 ramps up quickly to 255
    alpha = np.clip((max_val - 10) * 2, 0, 255)
    
    # Unmultiply the RGB values by the alpha to prevent dark fringing
    # rgb = rgb / (alpha/255)
    safe_alpha = np.where(alpha == 0, 1, alpha / 255.0)
    data[:,:,0] = np.clip(data[:,:,0] / safe_alpha, 0, 255)
    data[:,:,1] = np.clip(data[:,:,1] / safe_alpha, 0, 255)
    data[:,:,2] = np.clip(data[:,:,2] / safe_alpha, 0, 255)
    data[:,:,3] = alpha
    
    out_img = Image.fromarray(data.astype(np.uint8))
    # Crop to content
    bbox = out_img.getbbox()
    if bbox:
        out_img = out_img.crop(bbox)
        
    out_img.save(out_path, "WEBP")

process_image(r"C:\Users\manit\.gemini\antigravity-ide\brain\b6b1a9b7-5134-49c7-8e23-c9f5bd4c44f6\phoenix_home_logo_1787583804734.jpg", "public/home_logo.webp")
print("Saved home_logo.webp")
