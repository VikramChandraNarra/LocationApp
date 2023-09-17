import DropDownPicker from "react-native-dropdown-picker";
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import { useState } from "react";
import { Button } from 'react-native-paper';
import AppHeader from "../components/AppHeader";
import * as Speech from 'expo-speech';


function Search() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("2b");
    const [items, setItems] = useState([ // We would load data from a DB here
        {label: 'Room 2B', value: '2b', index: 0},
        {label: 'Room 3B', value: '3b', index: 1},
        {label: 'France', value: 'france', index: 2},
    ]);
    const [clickAction, setClick] = useState(false)
    const setClickAction = () => { 
        setClick(!clickAction) }
    const speak = () => {
        const index = 0;
        // adjust index to match the room number
        // index = value - 1;
        const selectedValue = items[index].value;
        const selectedItem = items.find(item => item.value === selectedValue);
        console.log(selectedItem);
        index < 0 ? index === 0 : Speech.speak('You have selected room ' + value) && index++;
        console.log(value);
    };

    return (
        
        // <PaperProvider>
        // {clickAction ? <Search></Search> : <NavigationContainer>
        <AppHeader />,
        <DropDownPicker
            // offset the style by 10%
            style={{marginTop: 50, marginLeft: 15, width: '90%'}}
            open={open}
            onClose={speak}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
        // <Button title="Press to hear some words" onPress={speak} />
        // </NavigationContainer>}
        // </PaperProvider>
    );
}

export default Search;
AppRegistry.registerComponent(appName, () => Search);