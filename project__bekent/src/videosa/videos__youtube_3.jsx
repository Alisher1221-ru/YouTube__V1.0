import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, Text, Tooltip, WrapItem, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import home from "../img/Без названия.png"
import shorts from "../img/viber.png"
import potpiski from "../img/3741721.png"
import bibliateka from "../img/5942620.png"
import history from "../img/873051-200.png"
import subscy from "../img/image.png"
import pojje from "../img/simple+and+minimal+line+icons+clock-1324450514352355098.png"
import Like from "../img/like.png"
import ogon from "../img/2126650-200.png"
import music from "../img/6020153.png"
import Live from "../img/live.png"
import Новости from "../img/Новости.png"
import Спорт from "../img/Спорт.png"
import lampa from "../img/lampa.png"
import ojejda from "../img/ojejda.png"
import Cart from "../header/cart";
import Card from "../main/Card";
import Headers__video from "./header__videos";



export default function Videos_3() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')

    

    let [Bek,setBek] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then(posts => posts.json())
        .then(poster => setBek(poster))
    },[])


    return(
        <>
        <Headers__video/>
        {Bek.slice(2,3).map((Cart)=>{
            return(
                <Box m={"150px auto"} bg={"gray.100"} borderRadius={"10px"} w={"80%"} h={"1000px"}>
                     <Box w={"100%"} h={"900px"} >
                        <img className="img__youtebe_1" key={Cart.id} src={Cart.url} alt=""/>
                    </Box>
                    <Box display={"flex"} h={"10%"} alignItems={"center"} p={"15px"}>
                    <WrapItem >
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    </WrapItem>
                    <Text p={"0 30px 0"} w={"62%"} key={"Cart.id"}>{Cart.title}</Text>
                    </Box>
                </Box>
            )
        })}
        </>
    )
}