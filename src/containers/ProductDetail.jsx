/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProduct,
  removeSelectedProduct,
} from '../redux/actions/ProductActions'

const ProductDetail = () => {
  const { id } = useParams()
  let product = useSelector((state) => state.product)
  const { title, image, price, category, description } = product
  const dispatch = useDispatch()
  useEffect(() => {
    if (id && id !== '') {
      dispatch(fetchProduct(id))
    }
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [])
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
