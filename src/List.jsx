import Proptypes from 'prop-types'
function List(props) {

    const category=props.category;
    const itemList=props.item;

    // this is for app.jsx
    // {fruit.length>0&&<List item={fruit} category="Fruit" />}
    //   <List item={vegetables} category="Vegetable" />

    // const fruit=[{id:1,name:"apple", calories:46},
    //              {id:2,name:"banana", calories:45},
    //              {id:3,name:"orange", calories:156},
    //              {id:4,name:"guava", calories:67},
    //              {id:5,name:"grapes", calories:189}];
    // const vegetables = [
    //     { id: 6, name: "Spinach", calories: 56 },
    //     { id: 7, name: "Potato", calories: 87 },
    //     { id: 8, name: "Ladyfingure", calories: 346 },
    //     { id: 9, name: "Bottle-gaurd", calories: 167 },
    //     { id: 10, name: "Cauliflower", calories: 139 },
    //   ];
    // we are going to send list as props

    // fruit.sort((a,b)=>a.name.localeCompare(b.name));//alphabatical sort according to their name
    // fruit.sort((a,b)=>a.calories-b.calories)//acc to calories


    // const highcalfruits=fruit.filter(fruit=>fruit.calories<100)
    // const highcalfruits=fruit.filter(fruit=>fruit.calories>=100)

    const fruitList=itemList.map(itemList=><li key={itemList.id}>{itemList.name}: <b>{itemList.calories}</b></li>)
    return(
        <>
        <h2 className="list-catagory">{category}</h2>
        <ol className="list-items">{fruitList}</ol>
        </>
    )
}

List.prototype={
    category:Proptypes.string,
    item:Proptypes.arrayOf(Proptypes.shape({id:Proptypes.number,name:Proptypes.string,category:Proptypes.number}))
}
List.defaultProps={
    category:"Category",
    item:[],
}

export default List;