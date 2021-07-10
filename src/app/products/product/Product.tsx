import Rating from 'app/rating/Rating'
import React, {useState} from 'react'
import Modal from 'app/modal/Modal'
import './Product.scss'

const Product = ({id,name,description,rating,image,promo,active,
} : {id: number, name:string, description: string, rating: number, image: string, promo: boolean, active: boolean}) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false)

  const onModalClose = () => setIsModalActive(false);

    return (
        <div className="product">
          {isModalActive && <Modal onClose={onModalClose} image={image} title={name} description={description} />}
          <div className="product__img">
              {promo && <div className="product__label">Promo</div>}
              <img src={image} alt={name} />
          </div>
          <div className="product__content">
            <h3 className="product__title">{name}</h3>
            <p>{description}</p>
          </div>
        <div className="product__footer">
          <div className="product__rating">
              <Rating rating={rating} />
          </div>
          <button onClick={()=>setIsModalActive(prev=>!prev)} className="btn" disabled={!active}>{active ? 'Show details' : 'Unavailable'}</button>
        </div>
        </div>
    )
}

export default Product
