import { useState } from "react";
import { Link } from "react-router";
import { CustomButton } from "~/components/CustomButton";
import "./welcome.css"

export function Welcome() {

  const [count, setCount] = useState<number>(0); // count = typat till number

  return (
    <main> 
      <header>
        <h1>Welcome to my Page!</h1>
      </header> 
        <div className="link">
          {/* länk till about */}
          <Link to={"/about"}>Navigate to About Page</Link>
        </div>
        <div>
          {/* counter-knapp */}
           <CustomButton 
          customButtonName="Count + 1"
          onClick={() => setCount(count + 1)}
          ></CustomButton>
          <p>Current Count: {count}</p> 
        </div>
    </main>
  );
}
