import os
import json
import urllib.request
import urllib.parse
import re

clients = {
    "BEML": "BEML_Limited",
    "TELCON": "Tata_Hitachi_Construction_Machinery",
    "Gainwell": "", # Probably no wiki, will skip or search
    "Sany": "Sany",
    "Scania": "Scania_AB",
    "SAIL": "Steel_Authority_of_India",
    "NMDC": "NMDC_Limited",
    "Western Coalfields": "Western_Coalfields",
    "Northern Coalfields": "Northern_Coalfields",
    "Singareni Collieries": "Singareni_Collieries_Company",
    "TATA": "Tata_Group",
    "Hindustan Zinc": "Hindustan_Zinc",
    "Mahanadi Coalfields": "Mahanadi_Coalfields",
    "XCMG": "XCMG"
}

os.makedirs("public/clients", exist_ok=True)

def get_wiki_image(title):
    if not title: return None
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles={urllib.parse.quote(title)}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'original' in pages[page_id]:
                    return pages[page_id]['original']['source']
    except Exception as e:
        print(f"Error fetching {title}: {e}")
    return None

def generate_svg_placeholder(name, filename):
    initials = "".join([w[0] for w in name.split()[:2]]).upper()
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="#ffffff" rx="20"/>
  <text x="100" y="115" font-family="Arial" font-size="80" font-weight="bold" fill="#ea580c" text-anchor="middle">{initials}</text>
  <text x="100" y="160" font-family="Arial" font-size="20" font-weight="bold" fill="#333333" text-anchor="middle">{name}</text>
</svg>'''
    with open(filename, "w") as f:
        f.write(svg)

metadata = []

# List from the user's file and image
all_clients = [
    "BEML", "TELCON", "Gainwell", "Sany", "Scania", "SAIL", "NMDC",
    "Western Coalfields", "Northern Coalfields", "Singareni Collieries",
    "TATA", "Hindustan Zinc", "BGR Mining", "SMS", "Mahanadi Coalfields",
    "PC Patel", "Rithwik", "Buildcon", "XCMG", "DMM", "Dev Mining",
    "VPR Mining", "RK Group"
]

for name in all_clients:
    filename = f"public/clients/{re.sub(r'[^a-zA-Z0-9]', '_', name.lower())}"
    
    wiki_title = clients.get(name, "")
    img_url = get_wiki_image(wiki_title) if wiki_title else None
    
    # Try Clearbit as fallback for others
    if not img_url:
        domain_map = {
            "Gainwell": "gainwellindia.com",
            "BGR Mining": "bgrmining.com",
            "SMS": "smsl.co.in",
            "PC Patel": "pcpatel.in",
            "Rithwik": "rithwikprojects.com",
            "Buildcon": "buildcon.in",
            "DMM": "dmm.com",
            "Dev Mining": "devmining.com",
            "VPR Mining": "vprmining.com",
            "RK Group": "rkgroup.in"
        }
        domain = domain_map.get(name)
        if domain:
            clearbit_url = f"https://logo.clearbit.com/{domain}"
            try:
                req = urllib.request.Request(clearbit_url, headers={'User-Agent': 'Mozilla/5.0'})
                # Check if it returns 200
                with urllib.request.urlopen(req) as response:
                    if response.getcode() == 200:
                        img_url = clearbit_url
            except:
                pass

    downloaded = False
    if img_url:
        ext = img_url.split('.')[-1].split('?')[0].lower()
        if ext not in ['png', 'jpg', 'jpeg', 'svg', 'webp']:
            ext = 'png'
        out_file = f"{filename}.{ext}"
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(out_file, 'wb') as out_f:
                out_f.write(response.read())
            downloaded = True
            metadata.append({"name": name, "image": f"/clients/{os.path.basename(out_file)}"})
            print(f"Downloaded logo for {name}")
        except Exception as e:
            print(f"Failed to download for {name}: {e}")
            
    if not downloaded:
        out_file = f"{filename}.svg"
        generate_svg_placeholder(name, out_file)
        metadata.append({"name": name, "image": f"/clients/{os.path.basename(out_file)}"})
        print(f"Generated placeholder for {name}")

# Write to a JSON file so we can easily copy it
with open("clients_data.json", "w") as f:
    json.dump(metadata, f, indent=2)

print("Finished processing all clients.")
