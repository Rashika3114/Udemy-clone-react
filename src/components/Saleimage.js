import one from "../assets/images/sale-image.jpg"

function Saleimage() {
    return (
        <div class="sale-image">
            <img src={one} alt="sale"></img>
            <div class="sale-image__offer">
                <h2>UdemyFlash Sale! 24 Hours to save.</h2>
                <p>Get the top Course for just 499. just one day
                    to save but a lifetime to learn</p>
            </div>
        </div>
    )
}
export default Saleimage
