import shutil
import os

src = "/Users/baljotchohan/BCA 2nd /BCA-2ND-SEM/MIS.jpeg"
dst = "/Users/baljotchohan/BCA 2nd /BCA-2ND-SEM/study-dashboard/public/MIS.jpeg"

try:
    shutil.copy2(src, dst)
    print(f"Successfully copied {src} to {dst}")
except Exception as e:
    print(f"Error: {e}")
