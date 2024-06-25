import React from 'react'

const NewCard = ({product}) => {
  return (
    <>
        <p class="browser-warning">If this looks wonky to you it's because this browser doesn't support the CSS property 'aspect-ratio'.</p>
        <div class="stack">
            <div class="newCard">
                <div class="image">
                    <img src={product.pic} alt={product.title} />
                </div>
            </div>
        </div>
    </>
  )
}

export default NewCard