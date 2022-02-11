export const products = [
  {
    "title": "First product",
    "description": "First product description"
  },
  {
    "title": "Second product",
    "description": "Second product description"
  },
  {
    "title": "Third product",
    "description": "Third product description"
  }
]

export const variants = {
  "media": [
    {
      "mediaContentType": "IMAGE",
      "originalSource": "https://media.istockphoto.com/photos/red-tshirt-clothes-picture-id685779142?s=612x612"
    },
    {
      "mediaContentType": "IMAGE",
      "originalSource": "https://media.istockphoto.com/photos/blue-tshirts-front-and-back-used-as-design-template-picture-id831591110?s=612x612"
    },
    {
      "mediaContentType": "IMAGE",
      "originalSource": "https://media.istockphoto.com/photos/green-tshirt-clothes-picture-id685724606?s=612x612"
    },
  ],
  "input": {
    "title": "T-shirt",
    "metafields": {
      "description": ""
    },
    "published": true,
    "options": [
      "Color", "Size"
    ],
    "variants": [
      {
        "mediaSrc": ["https://media.istockphoto.com/photos/red-tshirt-clothes-picture-id685779142?s=612x612"],
        "options": ["Red", "M"]
      },
      {
        "mediaSrc": ["https://media.istockphoto.com/photos/red-tshirt-clothes-picture-id685779142?s=612x612"],
        "options": ["Red", "L"]
      },
      {
        "mediaSrc": ["https://media.istockphoto.com/photos/blue-tshirts-front-and-back-used-as-design-template-picture-id831591110?s=612x612"],
        "options": ["Blue", "M"]
      },
      {
        "mediaSrc": ["https://media.istockphoto.com/photos/blue-tshirts-front-and-back-used-as-design-template-picture-id831591110?s=612x612"],
        "options": ["Blue", "L"]
      },
      {
        "mediaSrc": ["https://media.istockphoto.com/photos/green-tshirt-clothes-picture-id685724606?s=612x612"],
        "options": ["Green", "M"]
      },
      {
        "mediaSrc": ["https://media.istockphoto.com/photos/green-tshirt-clothes-picture-id685724606?s=612x612"],
        "options": ["Green", "L"]
      },
    ]
  }
 }