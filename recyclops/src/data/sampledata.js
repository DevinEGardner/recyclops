const items = {
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

// Paper

const paper = {
    isRecyclable: true,
    body: "Most community or office recycling programs accept paper and paper products. Check what your community or office program accepts before you put it in the bin. When you go shopping, look for products that are made from recycled paper.",
    responses:
    [
        {text: "Tissue Paper", next: paper_tissue},
        {text: "Mail", next: paper_mail},
        {text: "Gift Wrap", next: paper_giftwrap}
    ]
}

const paper_tissue = {
    question: "Is it worn or damaged?",
    reponses: 
    [
        {text: 'Yes', next: paper_tissue_notworndamaged},
        {text: 'No', next: paper_tissue_worndamaged}
    ]
}

const paper_tissue_worndamaged = {
    isRecyclable: false,
    body: "This cannot usually be recycled, but check with your local recycling center to find out what their policy is before throwing it away."
}

const paper_tissue_notworndamaged = {
    isRecyclable: true,
    body: "This can be reused! You should use it again before trying to throw it away or recycle it."
}

const paper_mail = {
    question: "Does it have foil or a laminated coating on it?",
    reponses: 
    [
        {text: 'Yes', next: paper_mail_notlaminatedcoated},
        {text: 'No', next: paper_mail_laminatedcoated}
    ]
}

const paper_mail_laminatedcoated = {
    isRecyclable: false,
    body: "This cannot usually be recycled, but check with your local recycling center to find out what their policy is before throwing it away."
}

const paper_mail_notlaminatedcoated = {
    isRecyclable: true,
    body: "This can be recycled!"
}

const paper_giftwrap = {
    question: "Was it made from recycled content?",
    responses: 
    [
        {text: 'Yes', next: paper_giftwrap_recyclable},
        {text: 'No', next: paper_giftwrap_notrecyclable}
    ]
}

const paper_giftwrap_recyclable = {
    isRecyclable: true,
    body: "This can be recycled!"
}

const paper_giftwrap_notrecyclable = {
    isRecyclable: false,
    body: "This cannot be recycled. A lot of gift wrap isn’t recyclable because of the coating on the paper, which is often shiny and laminated. However, check with your local recycling provider first to be certain and for the best ways to dispose of wrapping paper."
}

// Cardboard

const cardboard = {
    responses: [
        {text: "Food Container", next: cardboard_foodcontainer},
        {text: "Box", next: cardboard_box}
    ]
}

const cardboard_foodcontainer = {
    question: "Is there grease stains or food debris on the container?",
    responses: [
        {text: 'Yes', next: cardboard_foodcontainer_notrecyclable},
        {text: 'No', next: cardboard_foodcontainer_recyclable}
    ]
}

const cardboard_foodcontainer_recyclable = {
    isRecyclable: true,
    body: "This can be recycled!"
}

const cardboard_foodcontainer_notrecyclable = {
    isRecyclable: false,
    body: "This cannot be recycled, but some paper or cardboard materials can be composted even if there is food debris on them."
}

const cardboard_box = {
    isRecyclable: true,
    body: "This can be recycled! Make sure to break down the box before you recycle it."
}

// Bags

const bags = {
    responses: [
        {text: "Gift Bag", next: bags_giftbag},
        {text: "Grocery Bag", next: bags_grocerybag}
    ]
}

const bags_giftbag = {
    question: "Is it worn or damaged?",
    responses: [
        {text: 'Yes', next: bags_giftbag_worndamaged},
        {text: 'No', next: bags_giftbag_notworndamaged}
    ]
}

const bags_giftbag_worndamaged = {
    isRecyclable: false,
    body: "This cannot usually be recycled, but check with your local recycling provider first to be certain."
}

const bags_giftbag_notworndamaged = {
    isRecyclable: true,
    body: "This can be reused! You should use it again before trying to throw it away or recycle it."
}

const bags_grocerybag = {
    question: "Is it paper or plastic?",
    responses: [
        {text: 'Paper', next: bags_grocerybag_paper},
        {text: 'Plastic', next: bags_grocerybag_plastic}
    ]
}

const bags_grocerybag_paper = {
    question: "Does it have any food stains?",
    responses: [
        {text: 'Yes', next: bags_grocerybag_paper_foodstains},
        {text: 'No', next: bags_grocerybag_paper_nofoodstains}
    ]
}

const bags_grocerybag_paper_foodstains = {
    isRecyclable: false,
    body: "This cannot be recycled, but some paper or cardboard materials can be composted even if there is food debris on them."
}

const bags_grocerybag_paper_nofoodstains = {
    isRecyclable: true,
    body: "This can be recycled!"
}

const bags_grocerybag_plastic = {
    isRecyclable: true,
    body: "Plastic bags can be reused! Some recycling plants will take plastic bags, but check with your local recycling provider first before throwing it in the bin."
}

const containers = {
    responses: null
}

const cans = {
    responses: null
}

const electronics = {
    responses: null
}

const other = {
    responses: null
}