import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

// 다음 페이지로 넘길 component를 입력하는 함수
function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
    
}

// 뒤로가기를 구현한 함수
function back() { 
    _navigator.dispatch(
        NavigationActions.back()
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    back,
};