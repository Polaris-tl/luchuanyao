import React from 'react';
import {
  ContentBlock,
  Editor as DraftEditor,
  RawDraftContentState,
} from 'react-draft-wysiwyg';
import { EditorState, Entity, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface IProps {
  setHtmlString?: (html: string) => void;
  initValue?: string;
}
interface IState {
  editorContent: RawDraftContentState | undefined;
  editorState: EditorState | undefined;
}

// 媒体元素渲染
const Media = (props: any) => {
  const key = props.block.getEntityAt(0);
  if (!key) {
    return null;
  }
  const entity = Entity.get(key);
  const data = entity.getData();
  const type = entity.getType();
  if (type.toLocaleLowerCase() === 'image') {
    return (
      <img className="content_image" src={data.src} alt="用户上传的图片" />
    );
  } else if (type.toLocaleLowerCase() === 'video') {
    return (
      <div style={{ display: 'flex', justifyContent: data.position }}>
        <video controls src={data.src} />
      </div>
    );
  }
  return null;
};

// 自定义渲染器
const mediaBlockRenderer = (block: ContentBlock) => {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
};
export default class ArticleEditor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      editorContent: {
        blocks: [],
        entityMap: {},
      },
      editorState: undefined,
    };
  }
  componentDidMount() {
    const { initValue } = this.props;
    if (initValue) {
      const contentBlock = htmlToDraft(initValue);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks,
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    }
  }
  componentWillReceiveProps(nextProps: IProps) {
    if (this.props.initValue !== nextProps.initValue && nextProps.initValue) {
      // 匹配富文本编辑器格式，回显保存的内容
      const contentBlock = htmlToDraft(nextProps.initValue);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks,
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    }
  }
  //清空文本
  handleClearContent = () => {
    this.setState({
      editorState: undefined,
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <DraftEditor
          editorState={editorState}
          customBlockRenderFunc={mediaBlockRenderer}
          toolbarStyle={{ display: 'none' }}
          readOnly
          toolbar={undefined}
        />
      </div>
    );
  }
}
