import React from 'react';
import './Main.scss';
import testData from './data'

const Main = () => {
    return (
        <main>
            <ul>
                {testData.map((item, index) =>{
                        return(
                            <li key={index}
                            className={item.class}>
                                <div>
                                    <img src={item.pfp} alt='' />
                                    <h1>
                                        {item.name}
                                        <span> <br />Verfified Graduate</span>
                                    </h1>
                                </div>
                                <p className='highlight'>
                                    {item.highlight}
                                </p>
                                <p className='paragraph'>
                                    {item.paragraph}
                                </p>
                            </li>
                        )
                    })}
            </ul>
        </main>
    );
}
 
export default Main;