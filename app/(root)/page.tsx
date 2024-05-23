import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = ()=>{
    const loggedIn = {firstName: "Mustafa", lastName: "khan", email: 'mustafaalikhan757@gmail.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                      type="greeting"
                      title="Welcome"
                      user={loggedIn?.firstName || 'Guest'}
                      subtext="Access and manage your account and transactions efficiently."
                    />

                      <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                       />
                </header>
                
            </div>

            <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500.50}]}/>
        </section>
    )
}

export default Home;