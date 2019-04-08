import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import LandingLight from './components/LandingLight';
import LandingDark from './components/LandingDark';
import { AppContainer, SwitchContainer } from './styles/AppStyles';

function App() {
    const checkState =
        window.localStorage.getItem('checkState') === 'true' || false;
    const [check, setCheck] = useState(checkState);
    const [visible, setVisible] = useState(false);

    function toggleVisibility() {
        setVisible(!visible);
    }

    function handleChange() {
        setCheck(!check);
    }

    useEffect(
        () => {
            window.localStorage.setItem('checkState', check);
        },
        [check]
    );

    return (
        <AppContainer>
            <SwitchContainer
                onMouseEnter={toggleVisibility}
                onMouseLeave={toggleVisibility}
                checked={check}
                visible={visible}
            >
                <Switch
                    onChange={handleChange}
                    checked={check}
                    onColor="#C5D7DF"
                    onHandleColor="#07435E"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
            </SwitchContainer>
            <>{check ? <LandingLight /> : <LandingDark />}</>
        </AppContainer>
    );
}

export default App;
