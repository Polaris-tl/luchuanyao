import React from 'react'
import { ContentBlock, Editor as DraftEditor, RawDraftContentState} from 'react-draft-wysiwyg'
import { EditorState, Entity, AtomicBlockUtils } from 'draft-js';
import draftjs from 'draftjs-to-html'
import VideoRenderer from './video'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
 
interface IState {
  editorContent: RawDraftContentState | undefined,
  editorState: EditorState | undefined,
}

// 媒体元素渲染
const Media = (props: any) => {
  const key = props.block.getEntityAt(0)
  if (!key) {
    return null
  }
  const entity = Entity.get(key)
  const data = entity.getData()
  const type = entity.getType()
  if (type.toLocaleLowerCase() === 'image') {
    return <img
      className="content_image"
      src={data.src}
      alt="用户上传的图片"
    />
  } else if (type.toLocaleLowerCase() === 'video') {
    return <video
      src={data.src}
    />
  }
  return null
}

// 自定义渲染器
const mediaBlockRenderer = (block: ContentBlock) => {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
}

class CustomOption extends React.Component<any,any> {
  constructor(props: any){
    super(props)
    this.state = {
      expanded: false
    }
  }
  addVideo(){
    this.setState({expanded: !this.state.expanded})
    const { editorState, onChange, config } = this.props as {
      editorState: EditorState,
      onChange: (data: EditorState) => void,
      config: any
    };
    const entityKey = editorState
      .getCurrentContent()
      .createEntity('video', 'MUTABLE', {src: 'https://vd3.bdstatic.com/mda-mdrkbvrn46fx7cq7/fhd/cae_h264_nowatermark/1619447036/mda-mdrkbvrn46fx7cq7.mp4?v_from_s=nj_haokan_4469&auth_key=1619510375-0-0-2bb05663cd7aea4be44a4d6743cbb9f6&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000165_1'})
      .getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      ' '
    );
    // onChange(newEditorState);
  };

  doExpand = () => {
    this.setState({
      expanded: true,
    });
  };

  doCollapse = () => {
    this.setState({
      expanded: false,
    });
  };

  render() {
    const { expanded } = this.state
    return (
      <div>
        <div onClick={() => {this.addVideo()}}>视频</div>
        {expanded && <div>
            奥术大师大所多
        </div>}
      </div>
    );
  }
}

const toobarOptions = {
  image: {
    uploadCallback: (data: File) => {
      return new Promise((resolve) => {
        const formData = new FormData();
        const request = new XMLHttpRequest();
        formData.append("image", data);
        request.open("POST", 'imageUploadUrl');
        request.onload = () => {
          console.log(request.response)
          resolve({ data: { link: 'http://img1.sycdn.imooc.com/5939663c000133f904850387.jpg'}})
        }
        request.send(formData);
      })
    },
    previewImage: true,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
  }
}


export default class ArticleEditor extends React.Component<{},IState>{
    state = {
        editorContent: {
          blocks: [],
          entityMap:{}
        },
        editorState: undefined
    }
    //清空文本
    handleClearContent = () => {  
        this.setState({
            editorState: undefined
        })
    }
    //获取html格式文本内容
    handleGetText = () => {    
        alert(draftjs(this.state.editorContent))
    }
    //编辑器的状态
    onEditorStateChange = (editorState: EditorState) => {   
        this.setState({
            editorState
        })
    }
    //编辑器文本框内容
    onContentStateChange = (editorContent: RawDraftContentState) => {   
        this.setState({
            editorContent
        })
    }
    render(){
        const { editorState } = this.state;
        return (
          <div>
            <DraftEditor
              editorState= {editorState}
              customBlockRenderFunc={mediaBlockRenderer}
              onEditorStateChange= {this.onEditorStateChange}
              onContentStateChange= {this.onContentStateChange}
              toolbarCustomButtons={[<VideoRenderer />]}
              toolbar= { toobarOptions }
              localization= {{ locale: 'zh'}}
              placeholder="请输入内容..."
            />
          </div>
        )
    }
}　　