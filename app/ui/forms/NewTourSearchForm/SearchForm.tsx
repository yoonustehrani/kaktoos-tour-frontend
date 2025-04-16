import { useFormikContext } from "formik";
import NightsNumberField from "./components/Fields/NightsNumberField";
import PickDatesField from "./components/Fields/PickDatesField";
import SelectDestinationsField from "./components/Fields/SelectDestinationsField";
import SelectOriginField from "./components/Fields/SelectOriginField";

export default function() {
    const {submitForm, setFieldValue} = useFormikContext()
    return (
        <div className="w-full md:w-max md:h-40 bg-gray-50 border border-black/5 shadow-md rounded-2xl z-20">
            <div className="w-full h-full py-3 px-3 grid grid-cols-2 md:grid-flow-col justify-start gap-2">
                <SelectOriginField />
                <SelectDestinationsField />
                <PickDatesField setFieldValue={setFieldValue}/>
                <NightsNumberField />
                <button type="button" onClick={submitForm} className="bg-websiteOrange text-white p-3 col-span-full md:col-span-1 h-full rounded-xl md:w-52 flex gap-3 md:gap-0 md:flex-col items-center justify-center">
                    <i className="fi fi-rs-search size-7 md:size-12 text-3xl md:text-5xl"></i>
                    <h4 className="text-2xl font-semibold">جستجو در تورها</h4>
                </button>
            </div>
        </div>
    )
}