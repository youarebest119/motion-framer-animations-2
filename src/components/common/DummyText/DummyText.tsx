import { Container } from "react-bootstrap";
import "./DummyText.scss";

interface propTypes {
    outerBorder?: boolean,
    innerBorder?: boolean,
}

const DummyText = (props: propTypes) => {
    return (
        <>
            <section style={{
                border: props.outerBorder ? "2px solid black" : "",
            }} className={"dummy_text"}>
                <Container>
                    <p
                        style={{
                            border: props.innerBorder ? "2px solid black" : "",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, perspiciatis cumque quia temporibus mollitia excepturi. A possimus consequatur voluptatum quasi doloribus alias, fuga, nihil, magnam veniam qui aliquid voluptatibus ad rerum. Iure, natus sint, aliquam vel corporis non in repellendus ea eum minima quas quaerat consectetur, facere ad voluptate quo reiciendis rerum itaque consequuntur dolores a. Perferendis magni mollitia, pariatur voluptatum illum minus libero a reiciendis veritatis laboriosam sequi distinctio? Autem, nam! Officiis, eius dicta culpa soluta voluptatem fugit nihil accusantium illum quos odio minima facilis exercitationem itaque hic, temporibus nostrum magnam eos reprehenderit sint expedita voluptatum nulla fuga. Totam eos suscipit dolore nemo distinctio animi voluptatem eligendi itaque labore rem autem facilis quisquam, dicta, et fugit vero iusto. Doloribus, expedita mollitia. Commodi tempore omnis deleniti, sunt adipisci velit dolorum et ducimus harum eius dolore excepturi error explicabo officia cumque, nisi dicta voluptate vitae corporis suscipit delectus quam voluptas similique sapiente. Consectetur vitae eum magni quam, atque est excepturi velit voluptatum odio cum dolores quidem aspernatur delectus sit minus quis, quasi, nam reprehenderit sunt! Ipsa aliquid excepturi cumque? Veritatis voluptate at culpa sed? Quae, repellat porro iste sed architecto aspernatur error? Tempora eligendi veritatis ullam at iste maiores velit, eius amet, reiciendis ab laboriosam asperiores reprehenderit possimus quod sapiente perferendis dolores explicabo vel error? Impedit adipisci repellat ipsum modi odit veritatis quos itaque perspiciatis commodi asperiores, nostrum amet ullam, vel vitae! Cum doloribus ex libero omnis, voluptas recusandae sit, accusantium praesentium necessitatibus unde ullam quidem nobis magnam corrupti. Ex voluptatem est dicta rem quos, consectetur laborum debitis facilis quo expedita perferendis impedit atque voluptate nam ad perspiciatis molestias provident quia! Ad enim tenetur cupiditate harum minima esse nobis asperiores commodi perspiciatis inventore ipsam assumenda aut consequuntur ut fugit earum exercitationem error facilis, corrupti distinctio quam! Praesentium, accusamus non totam cumque a eaque itaque fuga recusandae commodi ipsam ratione voluptate enim dolor numquam magni sunt expedita illo vitae, iure animi asperiores officiis? Iure assumenda aliquid, modi vero placeat excepturi doloribus. Asperiores odit molestiae non, alias quisquam aliquid illum sunt
                    </p>
                </Container>
            </section>
        </>
    )
}

export default DummyText
