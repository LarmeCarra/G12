import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

def fix_video_tag(match):
    tag = match.group(0)

    # 1. Normalize ANY repeated data- prefixes → src
    tag = re.sub(r'(data-)+src=', 'src=', tag)

    # 2. If both src and data-src exist, keep src and remove data-src
    tag = re.sub(r'\sdata-src="[^"]*"', '', tag)

    # 3. Remove preload="none"
    tag = re.sub(r'\s*preload="none"', '', tag)

    return tag

# Apply only to <video ...> tags
fixed_content = re.sub(r'<video\b[^>]*>', fix_video_tag, content)

with open("main_fixed.html", "w", encoding="utf-8") as f:
    f.write(fixed_content)

print("✅ Videos fully restored to normal <video src='...'>")