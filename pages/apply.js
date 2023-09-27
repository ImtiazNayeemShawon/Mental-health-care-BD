import Image from "next/image";
import Logo from "../public/frontlogo.png";

const apply = () => {
  return (
    <div className="mt-20 container mx-auto">
      <div>
        {/* content lsft */}
        <div className="w-1/3">
          <Image src={Logo} alt="Logo" width={500} />
          <p>
            Mental Health Care works to raise mental health awareness among the
            adolescents. Our mission is to reduce the misconceptions and stigma
          </p>
        </div>
        {/* form right */}
      </div>
    </div>
  );
};

export default apply;
