import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react"
import Card from "./Card"
import ShortCart from "./Short"
import { CloseIcon } from '@chakra-ui/icons'
import { useState } from "react"
import { Link } from "react-router-dom"


function Main() {


    let [Shorts,setShorts] = useState(true)


    return(
        <Box as="main">
            <div className="blok_nav">
                <div className="item__mini">
                    <p>All</p>
                </div>
                <div className="item__mini">
                    <p>music</p>
                </div>
                <div className="item__mini">
                    <p>online</p>
                </div>
                <div className="item__mini">
                    <p>online games</p>
                </div>
                <div className="item__mini">
                    <p>phonk</p>
                </div>
                <div className="item__mini">
                    <p>all on my</p>
                </div>
                <div className="item__mini">
                    <p>futbol</p>
                </div>
                <div className="item__mini">
                    <p>capcut</p>
                </div>
            </div>
            <Grid mt={"30px"} mb={"35px"} templateColumns='repeat(4, 1fr)' gap={6}>
                <Card/>
            </Grid>


            <Box w={"100%"} h={"5px"} bg={"#afafaf"} opacity={"0.5"} mb={"15px"}/>
            <Flex alignItems={"center"} justifyContent={Shorts ? "space-between":""} mb={"10px"}>
                {Shorts ? <img src="https://seeklogo.com/images/Y/youtube-shorts-logo-16273D1063-seeklogo.com.png" width={"90px"} alt="" />:"Раздел скрыт на 30 дн."}  
                <Button m={"0 0 0 10px"}  onClick={()=> Shorts ? setShorts(false):setShorts(true)} variant='ghost'>
                    {Shorts ? <CloseIcon/>:"Отменить"}
                </Button>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"space-between"} display={Shorts ? "flex":"none"}>
             <ShortCart/>
            </Flex>

            <Box w={"100%"} h={"5px"} bg={"#afafaf"} opacity={"0.5"} mt={"15px"}/>


            <Grid mt={"35px"} templateColumns='repeat(4, 1fr)' gap={6}>
                <Card/>
            </Grid>
        </Box>
    )
}
export default Main