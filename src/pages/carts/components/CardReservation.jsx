import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import TextCurrency from "../../../components/Elements/Text/TextCurrency"
import Text from "../../../components/Elements/Text/Text"
export default function CardReservation({ item, total }) {

    return (
        <div className="w-full sticky bottom-10 sm:w-[22rem] sm:static bg-white rounded-lg h-min px-5 py-7">
            <Text className={"text-center font-bold"}>Detail Orders</Text>
            <div className="flex justify-between border-b sm:mt-5 py-2">
                <Text>Items</Text>
                <Text className={"font-semibold"}>x{item}</Text>
            </div>
            <div className="flex items-center justify-between sm:mb-5 py-2">
                <Text>Total</Text>
                <TextCurrency
                    color="text-black"
                    fontWeight="font-bold"
                    className   ={"text-base"}
                    text={total}
                />
            </div>
            <Link to={"/order"} ><Button className="bg-primary my-5 w-full">CHECKOUT ({item})</Button></Link>
        </div>
    )
}

function CartSummary({ item, total = 0 }) {
    return (
        <div className="">

        </div>
    )
}
