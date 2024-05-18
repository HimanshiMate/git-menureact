const Slack = () => {
    return (
        <>
            <center>
                <section id="slack1">
                    <div>Made for people. <span style={{ color: "rgb(116, 46, 116)" }}>Built for productivity.</span></div>
                    <div>
                        <button style={{ backgroundColor: "rgb(116, 46, 116)" }}>SING UP WITH ADDRESS</button>
                        <button style={{ backgroundColor: "#4285F4" }}>SIGN UP WITH GOOGLE</button>
                    </div>
                    <p>Slack is free to try for a long as you like</p>
                    <div>
                        <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png" alt="" />
                        <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png" alt="" />
                        <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png" alt="" />
                        <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png" alt="" />
                        <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png" alt="" />
                        <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png" alt="" />
                    </div>
                    <div ><video id="video1" controls src="https://a.slack-edge.com/ada6012/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm"></video></div>
                </section>
            </center>


            <section id="slack2">
                <video controls id="video2" src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/speed.IN.webm"></video>
                <div id="portion1">
                    <div>Move fast with your <br /> tools in one place</div>
                    <p>Automate away routine tasks with the power of generative <br /> AI and simplify your workflow with all your favourite apps <br /> ready to go in Slack.</p>
                </div>

                <div id="portion2">
                    <div>Choose how you <br /> want to work</div>
                    <p>In Slack, you’ve got all the flexibility to work when, where <br /> and how it’s best for you. You can easily chat, send audio and <br /> video clips, or join a huddle to talk things through live.</p>

                </div>
                <video controls id="video3" width={"650px"} src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.IN.webm"></video>

                <div><video controls autoPlay muted loop id="video2" width={"650px"} src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.IN.webm"></video></div>
                <div id="portion3">
                    <div>Bring your team <br /> together</div>
                    <p>At the heart of Slack are channels: organised spaces for <br /> everyone and everything that you need for work. In <br /> channels, it’s easier to connect across departments, offices, <br /> time zones and even other companies.</p>

                </div>
            </section>

           
        </>

    )
}
export default Slack;