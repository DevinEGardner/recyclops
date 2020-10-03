export const containers = {
    responses: null
}

export const cans = {
    responses: null
}

export const electronics = {
    responses: null
}

export const other = {
    responses: null
}

// Paper

export const paper_tissue_worndamaged = {
    isRecyclable: false,
    body: "This cannot usually be recycled, but check with your local recycling center to find out what their policy is before throwing it away."
}

export const paper_tissue_notworndamaged = {
    isRecyclable: true,
    body: "This can be reused! You should use it again before trying to throw it away or recycle it."
}

export const paper_tissue = {
    question: "Is it worn or damaged?",
    reponses: 
    [
        {text: 'Yes', next: paper_tissue_notworndamaged},
        {text: 'No', next: paper_tissue_worndamaged}
    ]
}

export const paper_mail_laminatedcoated = {
    isRecyclable: false,
    body: "This cannot usually be recycled, but check with your local recycling center to find out what their policy is before throwing it away."
}

export const paper_mail_notlaminatedcoated = {
    isRecyclable: true,
    body: "This can be recycled!"
}
export const paper_mail = {
    question: "Does it have foil or a laminated coating on it?",
    reponses: 
    [
        {text: 'Yes', next: paper_mail_notlaminatedcoated},
        {text: 'No', next: paper_mail_laminatedcoated}
    ]
}

export const paper_giftwrap_recyclable = {
    isRecyclable: true,
    body: "This can be recycled!"
}

export const paper_giftwrap_notrecyclable = {
    isRecyclable: false,
    body: "This cannot be recycled. A lot of gift wrap isn’t recyclable because of the coating on the paper, which is often shiny and laminated. However, check with your local recycling provider first to be certain and for the best ways to dispose of wrapping paper."
}
export const paper_giftwrap = {
    question: "Was it made from recycled content?",
    responses: 
    [
        {text: 'Yes', next: paper_giftwrap_recyclable},
        {text: 'No', next: paper_giftwrap_notrecyclable}
    ]
}

export const paper = {
    isRecyclable: true,
    body: "Most community or office recycling programs accept paper and paper products. Check what your community or office program accepts before you put it in the bin. When you go shopping, look for products that are made from recycled paper.",
    responses:
    [
        {text: "Tissue Paper", next: paper_tissue},
        {text: "Mail", next: paper_mail},
        {text: "Gift Wrap", next: paper_giftwrap}
    ]
}
// Cardboard

export const cardboard_foodcontainer_recyclable = {
    Title:'Congratulations!',
    isRecyclable: true,
    body: "This can be recycled!\nTake it to your nearest recyling station"
}

export const cardboard_foodcontainer_notrecyclable = {
    isRecyclable: false,
    body: "This cannot be recycled, but some paper or cardboard materials can be composted even if there is food debris on them."
}

export const cardboard_foodcontainer = {
    Title: 'Food Container',
    question: "Are there grease stains or food debris on the container?",
    responses: [
        {text: 'Yes', next: cardboard_foodcontainer_notrecyclable},
        {text: 'No', next: cardboard_foodcontainer_recyclable}
    ]
}



export const cardboard_box = {
    isRecyclable: true,
    body: "This can be recycled! Make sure to break down the box before you recycle it."
}

export const cardboard = {
    Title:'Cardboard',
    question: 'What type of cardboard?',
    responses: [
        {text: "Food Container", next: cardboard_foodcontainer},
        {text: "Box", next: cardboard_box},
        {text: "Other", next: cardboard_box}
    ]
}

// Bags

export const bags_giftbag_worndamaged = {
    isRecyclable: false,
    body: "This cannot usually be recycled, but check with your local recycling provider first to be certain."
}

export const bags_giftbag_notworndamaged = {
    isRecyclable: true,
    body: "This can be reused! You should use it again before trying to throw it away or recycle it."
}
export const bags_grocerybag_paper_foodstains = {
    isRecyclable: false,
    body: "This cannot be recycled, but some paper or cardboard materials can be composted even if there is food debris on them."
}

export const bags_grocerybag_paper_nofoodstains = {
    isRecyclable: true,
    body: "This can be recycled!"
}

export const bags_grocerybag_paper = {
    question: "Does it have any food stains?",
    responses: [
        {text: 'Yes', next: bags_grocerybag_paper_foodstains},
        {text: 'No', next: bags_grocerybag_paper_nofoodstains}
    ]
}

export const bags_grocerybag_plastic = {
    isRecyclable: true,
    body: "Plastic bags can be reused! Some recycling plants will take plastic bags, but check with your local recycling provider first before throwing it in the bin."
}

export const bags_grocerybag = {
    question: "Is it paper or plastic?",
    responses: [
        {text: 'Paper', next: bags_grocerybag_paper},
        {text: 'Plastic', next: bags_grocerybag_plastic}
    ]
}

export const bags_giftbag = {
    question: "Is it worn or damaged?",
    responses: [
        {text: 'Yes', next: bags_giftbag_worndamaged},
        {text: 'No', next: bags_giftbag_notworndamaged}
    ]
}


export const bags = {
    responses: [
        {text: "Gift Bag", next: bags_giftbag},
        {text: "Grocery Bag", next: bags_grocerybag}
    ]
}

export const items = {
    question: 'What are you trying to recycle?',
    responses: [
        {text: "Paper", next: paper},
        {text: "Cardboard", next: cardboard},
        {text: "Bags", next: bags},
        {text: "Containers", next: containers},
        {text: "Cans", next: cans},
        {text: "Electronics", next: electronics},
        {text: "Other", next: other}
    ]
}