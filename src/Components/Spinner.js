import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";

export default function Spinner() {
    const override = css`
  display: flex;
  margin: 0 auto;
  border-color: red;
  height:100vh;
  align-items:center;
`;

    return (
        <div className="loader-wrapper">
            <BarLoader
                css={override}
                size={150}
                color={"firebrick"}
                loading={true}
            />
        </div>
    )
}