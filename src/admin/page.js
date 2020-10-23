import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default createClass({
  render() {
    const { widgetFor } = this.props;

    return html`${widgetFor('body')}`;
  },
});
