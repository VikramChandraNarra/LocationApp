import DropDownPicker from "react-native-dropdown-picker";
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import { useState } from "react";
import { PaperProvider } from "react-native-paper";
import AppHeader from "../components/AppHeader";
import { NavigationContainer } from '@react-navigation/native';

function Search() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([ // We would load data from a DB here
        {label: 'Room 1', value: 'usa'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]);
    const [clickAction, setClick] = useState(false)
    const setClickAction = () => { 
        setClick(!clickAction) }

    return (
        
        // <PaperProvider>
        // {clickAction ? <Search></Search> : <NavigationContainer>
        <AppHeader />,
        <DropDownPicker
            // offset the style by 10%
            style={{marginTop: 50, marginLeft: 15, width: '90%'}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
        // </NavigationContainer>}
        // </PaperProvider>
    );
}

export default Search;
AppRegistry.registerComponent(appName, () => Search);