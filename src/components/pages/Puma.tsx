import React from 'react';
import puma1 from '../../assets/puma1.jpg'
import puma2 from '../../assets/puma2.jpeg'
import puma3 from '../../assets/puma3.jpg'
import {Link} from "react-router-dom";
import {S} from "./_styles";
import {ShoesItem} from "./Model";

export const pumaArr: ShoesItem[] = [
    {
        id: 'pum0',
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '124$',
        picture: puma1,

    },
    {
        id: 'pum1',
        model: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '98$',
        picture: puma2
    },
    {
        id: 'pum2',
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '312$',
        picture: puma3
    }
]

export const Puma = () => {
    return (
        <div>
            <h2>PUMA</h2>
            <S.PictureWrapper>
                {pumaArr.map((el, index) => (
                        <Link to={`/puma/${el.id}`} key={index}>
                            <img src={el.picture}
                                 alt={el.model}/>
                        </Link>
                    )
                )}
            </S.PictureWrapper>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

