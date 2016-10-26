import { connect } from 'react-redux';
import PreViewTemplate from '../components/PreviewTemplate';

function renderPreview(to, cc, division, name, game, ids) {
  const value = [`To: ${to}`];
  value.push(`Cc: ${cc}`);
  value.push('');
  value.push(`${division}の${name}`);
  value.push('');
  value.push(`「${game}」のゲームID`);
  value.push('');
  value.push('======================================================');
  value.push('認証情報');
  value.push('');
  ids.map((id) => {
    value.push(`◎ ${id.content}`);
    value.push(`ID: ${id.id}`);
    value.push(`パスワード: ${id.password}`);
    value.push('');
  });
  value.push('======================================================');
  value.push('');
  return value.join('\n');
}

function mapStateToProps(state) {
  return {
    text: renderPreview(state.to, state.cc, state.division, state.name, state.game, state.ids)
  };
}

const PreView = connect(mapStateToProps)(PreViewTemplate);

export default PreView;
