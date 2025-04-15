import { useFormikContext } from "formik";
import NightsNumberField from "./components/Fields/NightsNumberField";
import PickDatesField from "./components/Fields/PickDatesField";
import SelectDestinationsField from "./components/Fields/SelectDestinationsField";
import SelectOriginField from "./components/Fields/SelectOriginField";

export default function() {
    const {submitForm, setFieldValue} = useFormikContext()
    return (
        <div className="w-max h-40 bg-gray-50 border border-black/5 shadow-md rounded-2xl z-20">
            <div className="w-full h-full py-3 px-3 flex justify-start gap-2">
                <SelectOriginField />
                <SelectDestinationsField />
                <PickDatesField setFieldValue={setFieldValue}/>
                <NightsNumberField />
                <button type="button" onClick={submitForm} className="bg-websiteOrange text-white p-3 h-full rounded-xl w-52 flex flex-col items-center justify-center">
                    <i className="fi fi-rs-search h-fit text-5xl"></i>
                    <h4 className="text-2xl font-semibold">جستجو در تورها</h4>
                </button>
            </div>
        </div>
    )
}