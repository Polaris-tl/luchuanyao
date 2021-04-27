import { useState } from 'react'
import { Tabs, Button, Input, Radio, Upload, Dropdown  } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { EditorState, Entity, AtomicBlockUtils } from 'draft-js';
import st from './index.less'
const { TabPane } = Tabs;

interface IProps {
  editorState: EditorState,
  onChange: (data: EditorState) => void,
  config: any
}

const VideoRenderer = (props: any) => {
  const [ expanded, setExpanded ] = useState(false)
  const [ src, setSrc] = useState('')
  const [ position, setPosition] = useState<'left' | 'center' | 'right'>('left')
  const addVideo = () => {
    setExpanded(!expanded)
    const { editorState, onChange, config } = props as IProps
    const entityData =  {
      src: 'https://vd3.bdstatic.com/mda-mdrkbvrn46fx7cq7/fhd/cae_h264_nowatermark/1619447036/mda-mdrkbvrn46fx7cq7.mp4?v_from_s=nj_haokan_4469&auth_key=1619510375-0-0-2bb05663cd7aea4be44a4d6743cbb9f6&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000165_1',
      position
    }
    const entityKey = editorState
      .getCurrentContent()
      .createEntity('video', 'MUTABLE', entityData)
      .getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      ' '
    );
    onChange(newEditorState);
  };

  function getBase64(img: Blob, callback: (src: any) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const handleChange = (info: any) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
          setSrc(imageUrl)
        }
      );
    }
  };

  return (
    <div className={st.box}>
      <Dropdown
        trigger={['click']}
        overlayStyle={{background: '#fff',padding: '10px', boxShadow: '0 0 9px 0px #adadad', width: '290px'}}
        visible={expanded}
        overlay={
          <div className={st.popup}>
            <Tabs defaultActiveKey="1" onChange={() => {setPosition('left');setSrc('')}}>
              <TabPane tab="本地视频" key="1">
                <Upload
                  name="file"
                  disabled={src.length != 0}
                  action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                  headers={ {authorization: 'authorization-text'} }
                  multiple={false}
                  onChange={handleChange}
                >
                  <Button icon={<UploadOutlined />}>点击上传</Button>
                </Upload>
                <Radio.Group onChange={(e) => setPosition(e.target.value)} value={position} style={{margin: '18px 0'}}>
                  <Radio value={'left'}>靠左</Radio>
                  <Radio value={'center'}>居中</Radio>
                  <Radio value={'right'}>靠右</Radio>
                </Radio.Group>
              </TabPane>
              <TabPane tab="在线视频" key="2">
                <p style={{marginBottom: '7px'}}>视频地址：</p>
                <Input value={src} onChange={(e) => setSrc(e.target.value)}></Input>
                <Radio.Group onChange={(e) => setPosition(e.target.value)} value={position} style={{margin: '18px 0'}}>
                  <Radio value={'left'}>靠左</Radio>
                  <Radio value={'center'}>居中</Radio>
                  <Radio value={'right'}>靠右</Radio>
                </Radio.Group>
              </TabPane>
            </Tabs>
            <Button disabled={src.length == 0} onClick={addVideo} type='primary' size='small' style={{marginRight: '16px', marginLeft: '10px'}}>确认</Button>
            <Button onClick={() => setExpanded(false)} size='small'>取消</Button>
          </div>
        }
      >
        <div onClick={() => {setExpanded(!expanded)}} className={st.icon}>添加</div>
      </Dropdown>
    </div>
  );
}

export default VideoRenderer