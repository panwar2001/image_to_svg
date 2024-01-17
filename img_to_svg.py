from PIL import Image
from time import time
def svg_convertor(img,img_height=200,img_width=200,pixel_size=10):
    img=img.resize((img_height,img_width))
    svg=f'<svg shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg">'
    for x in range(img_height):
        for y in range(img_width):
            pixel_color=img.getpixel((x,y))
            svg=svg+f'<path d="M{x} {y}h1v1h-1z" fill="rgb{pixel_color}"/>'

    svg+='</svg>'
    return svg
s=time()
img=Image.open('logo.jpeg')
svg=svg_convertor(img,img_height=200,img_width=200)
with open('2.svg','w') as f:
    f.write(svg)
    e=time()
    print(e-s)
