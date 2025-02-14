import { useState } from "react";
import { Link } from "react-router";
import { CustomButton } from "~/components/CustomButton";

export function Welcome() {

  const [count, setCount] = useState<number>(0); // count = typat till number

  return (
    <main>
      <header>
        <h1>Welcome to my Page!</h1>
      </header>
      <body>
        <div>
          <Link to={"/about"}>Navigate to About Page</Link>
        </div>
        <div>
          <p>Current Count: {count}</p>
          <CustomButton 
          customButtonName="Count + 1"
          onClick={() => setCount(count + 1)}
          ></CustomButton>
        </div>
        
      </body>
    </main>
  );
}
