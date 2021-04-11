import Head from 'next/head';

export default function Demo() {
    return (
        <div>
            <Head>
                <script type="text/javascript" src="/gumroad_popup.js"></script>
            </Head>
            <a class="gumroad-button" href="https://gum.co/ephfd">Buy my product</a>
            <br />
            <br />
            <a class="gumroad-button" href="https://ajones.gumroad.com">My Gumroad Profile</a>
            <br />
            <br />
            <a href="https://gum.co/ephfd">Unstyled Example</a>
        </div>
    )
}