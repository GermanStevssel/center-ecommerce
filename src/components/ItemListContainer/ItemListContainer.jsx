import { Card } from 'antd';
import './ItemListContainer.scss'
import img from '../../img/products/consoles/images'

const { Meta } = Card;

const ItemListContainer = (props) => {
  return (
    <div className='itemListContainer'>
      <div className='title'>
        <h2>{ props.greeting }</h2>
        
      </div>
      <div className='products'>

      {img.map(console => {
        return (
          <Card
          hoverable
          style={{ width: 240, margin: '2rem' }}
          cover={<img alt={ console.alt } src={ console.img } />}
          >
            <Meta title={console.name} description={ console.price } />
          </Card>
        )
      })}
      </div>
    </div>
  )
}

export default ItemListContainer