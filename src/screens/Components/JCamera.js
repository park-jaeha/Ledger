// import * as React from 'react';
// import {View, StyleSheet, StatusBar, Image, Text, TouchableOpacity, PermissionsAndroid, Platform} from 'react-native';
// import {RNCamera, FaceDetector} from 'react-native-camera'
// import FTP from 'react-native-ftp';
// /** Component Import */
// import  Global from './../../Global';

// let MSSQLUpload = require('./../../Models/MSSQL/MSSQLUpload');

// const ftp = async ()=>{
//     FTP.setup("218.38.121.75",21);
//     await FTP.login("WORK","jhTecSys@)@)").then(
//         (result)=>{
//            // FTP.list("./IMAGE/GEORIM/CAMERA").then(
//             //    (result)=>{
//                     console.log('success');
//             //    }
//             //);
//         },
//         (error)=>{
//             alert(error);
//         }
//     )
// }
// const JCamera = (props) =>{

//     const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref 생성
//     const [state,setState] = React.useState({path:null});


//     const checkAndroidPermission = async () => {    // 갤러리 접근 권한 -> manifest에서 퍼미션 추가해야 사용가능
//         try {
//         const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
//         await PermissionsAndroid.request(permission);
//         Promise.resolve(); 
//         } catch (error) {
//         Promise.reject(error);
//         }
//     };
//     const takePhoto = async () => {
//         //console.log('cameraRef', cameraRef);
//         if(Platform.OS === 'android'){
//             await checkAndroidPermission();
//         }
//         if (cameraRef) {
//         const data = await cameraRef.current.takePictureAsync({
//             quality: 1,
//             exif: true,
//         });
        
//         console.log('data=', data.uri);
//         if (data) {
//             //const result1 = await CameraRoll.save(data.uri);
//             setState({ path : data.uri });
//             //console.log('🐤result', result1);
//             //let result2 = result1.replace("content://","");
//             data.uri =data.uri.replace("file:/","");
//             //result1 = result1.replace("content://","");
//             //let MSSQLUpdate = await MSSQLUpload("INSERT INTO TB_IMG(IMG_URI,CREATION_DATE,CREATION_BY) VALUES('"+ data.uri +"',GETDATE(), '"+ Global.userInfo._userNm+"')");
//             //handlingDataForm(data);
//             await ftp();
//             FTP.uploadFile("./"+data.uri,"./IMAGE/GEORIM/CAMERA")
//                 .then(result=>{
//                     console.log(result);
//                     alert('서버에 저장되었습니다.');
//                 })
//                 .catch(error=>alert(error))
//         }
        
//         //console.log(state);
//         }
//     };

//     // const actionImgCompress = async (data) => {
//     //     console.log("압축 시작");
    
//     //     const options = {
//     //     maxSizeMB: 0.2,
//     //     maxWidthOrHeight: 1920,
//     //     useWebWorker: true
//     //     };
//     //     try {
//     //     const compressedFile = await imageCompression(data, options);
    
//     //       // FileReader 는 File 혹은 Blob 객체를 이용하여, 파일의 내용을 읽을 수 있게 해주는 Web API
//     //     const reader = new FileReader();
//     //     reader.readAsDataURL(compressedFile);
//     //     reader.onloadend = () => {
//     //         // 변환 완료!
//     //         const base64data = reader.result;
    
//     //         // formData 만드는 함수
//     //         handlingDataForm(base64data);
//     //     };
//     //     } catch (error) {
//     //     console.log(error);
//     //     }
//     // };

//     // const handlingDataForm = async (data) => {
//     //     // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
//     //     //const byteString = atob(data.split(",")[1]);
    
//     //     // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
//     //     const ab = new ArrayBuffer(data.length);
//     //     const ia = new Uint8Array(ab);
//     //     for (let i = 0; i < data.length; i++) {
//     //     ia[i] = data.charCodeAt(i);
//     //     }
//     //     const blob = new Blob([ia], {
//     //     type: "image/jpeg"
//     //     });
//     //     const file = new File([blob], "image.jpg");
    
//     //     // 위 과정을 통해 만든 image폼을 FormData에 넣어줍니다.
//     //     // 서버에서는 이미지를 받을 때, FormData가 아니면 받지 않도록 세팅해야합니다.
//     //     const formData = new FormData();
//     //     formData.append("representative_avatar", file);
    
//     //     // 필요시 더 추가합니다.
//     //     //formData.append("name", "nkh");
//     //     //formData.append("email", "noh5524@gmail.com");
    
//     //     try {
//     //     const changeAvatar = await apis.auth.changeUserAccount(formData);
//     //     alert(changeAvatar.status);
//     //     } catch (error) {
//     //     alert(error.response.data.errors);
//     //     }

//     //     let MSSQLUpdate = await MSSQLUpload("INSERT INTO TB_IMG(IMG_URI,CREATION_DATE,CREATION_BY) VALUES('"+ changeAvatar+"',GETDATE(), '"+ Global.userInfo._userNm+"')");
//     // };

//     return(
//         <View style = {styles.CameraWrap}>
//             {state.path && 
//             <View style = {{ flex:1}}>
//                 <Image
//                     source={{uri:state.path}}
//                     style={styles.preview}
//                 />
//                 <Text
//                     style={styles.cancel}
//                     onPress={()=>setState({path:null})}
//                 >Cancel</Text>
//             </View>
//             }
//             {!state.path && <View style = {{flex : 1}}>
//             <StatusBar animated hidden/>
//             <RNCamera style = {styles.preview}
//             type ={RNCamera.Constants.Type.back}
//             ref={cameraRef}
//             captureAudio={false}/>
//             <View style = {[styles.overlay, styles.bottomOverlay]}>
//                 <TouchableOpacity style= {styles.captureButton}
//                     onPress={takePhoto.bind(this)}>
//                 </TouchableOpacity>
//             </View>
//             </View>}
//         </View>
//     );
// }

// const styles= StyleSheet.create({
//     CameraWrap:{
//         flex:1,
//     },
//     preview:{
//         flex:1,
//         justifyContent:'flex-end',
//         alignItems:'center',
//     },
//     overlay: {
//         position: 'absolute', 
//         padding: 16, 
//         right: 0, 
//         left: 0, 
//         alignItems: 'center', 
//     }, 
//     bottomOverlay: { 
//         bottom: 0, 
//         backgroundColor: 'rgba(0, 0, 0, 0.4)', 
//         flexDirection: 'row', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//     }, captureButton: { 
//         padding: 15, 
//         backgroundColor: 'white', 
//         borderRadius: 40, 
//     },
//     cancel:{
//         height:30,
//         textAlignVertical:'center',
//         textAlign:'center',
//     },
// });

// export default JCamera;