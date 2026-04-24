import re

# Read file safely
with open("main.html", "r", encoding="utf-8") as f:
    content = f.read()

def fix_video_tag(match):
    tag = match.group(0)

    # 1. Skip if already has data-src (prevents stacking)
    if 'data-src=' not in tag:
        tag = re.sub(r'\bsrc="([^"]+)"', r'data-src="\1"', tag)

    # 2. Ensure ONLY one data-src (fix accidental duplicates)
    tag = re.sub(r'(data-)+src=', 'data-src=', tag)

    # 3. Add preload="none" only if missing
    if 'preload=' not in tag:
        tag = tag.replace('>', ' preload="none">')

    return tag

# Apply ONLY to <video ...> opening tags
content = re.sub(r'<video\b[^>]*>', fix_video_tag, content)

# Save safely to a NEW file (important!)
with open("main_lazy_fixed.html", "w", encoding="utf-8") as f:
    f.write(content)

print("✅ Fixed lazy-loading applied safely!")