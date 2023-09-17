import DropDownPicker from "react-native-dropdown-picker";
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import { useState } from "react";
import { Button } from 'react-native-paper';
import AppHeader from "../components/AppHeader";
import * as Speech from 'expo-speech';
import { View } from "react-native-web";


function Search({ backBtn }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [index, setIndex] = useState(0); // Initialize index in component state
    const [items, setItems] = useState([ // We would load data from a DB here
        {label: 'Room 2B', value: '2b', index: 0},
        {label: 'Room 3B', value: '3b', index: 1},
        {label: 'France', value: 'france', index: 2},
    ]);
    const [clickAction, setClick] = useState(false)
    const setClickAction = () => { 
        setClick(!clickAction) }
    const speak = () => {
        // Use the callback function to access the updated value
        setValue((prevValue) => {
            console.log(prevValue); // This should reflect the updated value
            
            const selectedValue = items[index].value;
            const selectedItem = items.find((item) => item.value === selectedValue);
            Speech.speak('You have selected room ' + selectedItem.value);
            
            // Update the index for the next selection
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
            
            // Return the updated value
            return selectedItem.value;
        });
    };

    return (
        // ...
        <>
            <AppHeader />
            <DropDownPicker
                style={{ marginTop: 50, marginLeft: 15, width: '90%' }}
                open={open}
                onClose={speak}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <Button
                title="Click Me"
                buttonColor="#000000"
                onPress={() => backBtn()}
            />
        </>
    );
    
}

export default Search;
AppRegistry.registerComponent(appName, () => Search);