/* eslint-disable react/prop-types */

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-10">
            <p className="text-yellow-500 pb-2">{subHeading}</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
           
        </div>
    );
};

export default SectionTitle;