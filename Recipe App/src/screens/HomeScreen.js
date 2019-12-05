import React,{Component} from 'react';
import { StyleSheet, Text, View ,FlatList,ActivityIndicator} from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { TextInput } from 'react-native-gesture-handler';

/*
const DATA = [
	{
		publisher: 'Closet Cooking',
		f2f_url: 'http://food2fork.com/view/35382',
		title: 'Jalapeno Popper Grilled Cheese Sandwich',
		source_url: 'http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html',
		recipe_id: '35382',
		image_url: 'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
		social_rank: 100.0,
		publisher_url: 'http://closetcooking.com',
	},
	{
		publisher: 'The Pioneer Woman',
		f2f_url: 'http://food2fork.com/view/47024',
		title: 'Perfect Iced Coffee',
		source_url: 'http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/',
		recipe_id: '47024',
		image_url: 'http://static.food2fork.com/icedcoffee5766.jpg',
		social_rank: 100.0,
		publisher_url: 'http://thepioneerwoman.com',
	},
	{
		publisher: 'The Pioneer Woman',
		f2f_url: 'http://food2fork.com/view/47319',
		title: 'Crash Hot Potatoes',
		source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
		recipe_id: '47319',
		image_url: 'http://static.food2fork.com/CrashHotPotatoes5736.jpg',
		social_rank: 100.0,
		publisher_url: 'http://thepioneerwoman.com',
	},
	{
		publisher: 'Two Peas and Their Pod',
		f2f_url: 'http://food2fork.com/view/54384',
		title: 'Stovetop Avocado Mac and Cheese',
		source_url: 'http://www.twopeasandtheirpod.com/stovetop-avocado-mac-and-cheese/',
		recipe_id: '54384',
		image_url: 'http://static.food2fork.com/avocadomacandcheesedc99.jpg',
		social_rank: 100.0,
		publisher_url: 'http://www.twopeasandtheirpod.com',
	},
	{
		publisher: 'Closet Cooking',
		f2f_url: 'http://food2fork.com/view/35171',
		title: 'Buffalo Chicken Grilled Cheese Sandwich',
		source_url: 'http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html',
		recipe_id: '35171',
		image_url: 'http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg',
		social_rank: 100.0,
		publisher_url: 'http://closetcooking.com',
	},
	{
		publisher: 'The Pioneer Woman',
		f2f_url: 'http://food2fork.com/view/d9a5e8',
		title: 'Cinnamon Rolls',
		source_url: 'http://thepioneerwoman.com/cooking/2007/06/cinammon_rolls_/',
		recipe_id: 'd9a5e8',
		image_url: 'http://static.food2fork.com/333323997_04bd8d6c53da11.jpg',
		social_rank: 100.0,
		publisher_url: 'http://thepioneerwoman.com',
	},
	{
		publisher: '101 Cookbooks',
		f2f_url: 'http://food2fork.com/view/47746',
		title: 'Best Pizza Dough Ever',
		source_url: 'http://www.101cookbooks.com/archives/001199.html',
		recipe_id: '47746',
		image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
		social_rank: 100.0,
		publisher_url: 'http://www.101cookbooks.com',
	},
	{
		publisher: '101 Cookbooks',
		f2f_url: 'http://food2fork.com/view/47899',
		title: 'Magic Sauce',
		source_url: 'http://www.101cookbooks.com/archives/magic-sauce-recipe.html',
		recipe_id: '47899',
		image_url: 'http://static.food2fork.com/magic_sauce_recipeece9.jpg',
		social_rank: 100.0,
		publisher_url: 'http://www.101cookbooks.com',
	},
	{
		publisher: 'The Pioneer Woman',
		f2f_url: 'http://food2fork.com/view/47042',
		title: 'Spicy Dr. Pepper Shredded Pork',
		source_url: 'http://thepioneerwoman.com/cooking/2011/03/spicy-dr-pepper-shredded-pork/',
		recipe_id: '47042',
		image_url: 'http://static.food2fork.com/5551711173_dc42f7fc4b_zbd8a.jpg',
		social_rank: 100.0,
		publisher_url: 'http://thepioneerwoman.com',
	},
	{
		publisher: 'Whats Gaby Cooking',
		f2f_url: 'http://food2fork.com/view/713134',
		title: 'Parmesan Roasted Potatoes',
		source_url: 'http://whatsgabycooking.com/parmesan-roasted-potatoes/',
		recipe_id: '713134',
		image_url: 'http://static.food2fork.com/ParmesanRoastedPotatoes11985a.jpg',
		social_rank: 100.0,
		publisher_url: 'http://whatsgabycooking.com',
	},
	
];
*/
export default class HomeScreen extends Component{
    static navigationOptions ={ 
        title :'Recipe List',
	};
	
	constructor(props){
		super(props);
		this.state ={
			loading :true,
			data : null,
			searchTerm : ''
		}
	}

	componentDidMount(){
		fetch('https://www.food2fork.com/api/search?key=b8a8cac975085b642a79083fd8e83a56')
		.then(response =>response.json())
		.then(responseJson =>{
			this.setState({
				loading:false,
				data: responseJson
			})
		};
	}

	renderRecipeItem =({ item,index}) =>{
		const {navigation} = this.props;
		return(
			<RecipeItem navigation={navigation} item={item}/>
		);
	}
	searchFilter = (text) =>{
		this.setState({
			searchTerm: text
		});
	}
    render(){
		const {loading,data} = this.state;
		if(loading){
			return(
				<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
					<ActivityIndicator size="large",color="orange"/>
				</View>
			)
		}
        return(
            <View>
                <FlatList
                    data ={data ? data.recipes : []}
                    renderItem ={this.renderRecipeItem}
                    keyExtractor={(item,index)=>item.recipe_id}
					contentContainerStyle={{marginTop:20}}
					ListHeaderComponent={
						<View>
							<Text style={{padding:23,fontSize:17,fontWeight:'bold',fontStyle:'italic'}}>
								Explore {data.count} Recipes...
							</Text>
							<TextInput
								style = {{
									height:40,
									borderColor:'orange',
									borderWidth: 1,
									marginBottom:20,
									marginHorizontal:25,
									paddingLeft :15
								}}
								placeholder = "SEARCH..."
								onChangeText = {text =>{
									this.searchFilter(text)
								}}
								value = {value}
							/>
						</View>
					}
                />
            </View>
        )
    }
}