import React, {Component} from 'react';
import s from './index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>HTML标签概览</h1>
        <header>
          <div>
            <picture>
              <img src="" alt="这里是图片"/>
            </picture>

          </div>
          <nav className={s.nav}>
            <ul>
              <li><a href="">文章</a></li>
              <li><a href="">图片和多媒体</a></li>
              <li><a href="">表格</a></li>
              <li><a href="">表单</a></li>
              <li><a href="">交互元素</a></li>
            </ul>
          </nav>
        </header>
        <aside>
          <h3>内容分区 14个标签</h3>
          <ul>
            <li>header,nav,aside,aritcle,section,footer</li>
            <li>h1~h6 标签</li>
            <li>hgroup</li>
            <li>address</li>
          </ul>
          <h3>文本内容 15个标签</h3>
          <ol>
            <li>ul,ol,li,dl,dt,dd</li>
            <li>main,dir,pre,p,div,blockquote</li>
            <li>hr</li>
            <li>figure,figcaption</li>
          </ol>
          <h3>内联文本语义 31个标签</h3>
          <ul>
            <li></li>
          </ul>
          <dl>
            <dt>
            图片和多媒体 6个标签
              <dd>image,audio,video</dd>
              <dd>area,map,track</dd>
            </dt>
            <dt>
              <dd></dd>
            </dt>
          </dl>
          <h3>表格内容 10个标签</h3>
          <ol>
            <li>caption,col,colgroup</li>
            <li>table,thead,tr,th,tbody,td,tfoot</li>
          </ol>
          <h3>表单 14个标签</h3>
          <ul>
            <li>form,label,input,select,optgroup,option,textarea</li>
            <li>datalist,output,progress,meter</li>
            <li>fieldset,legend</li>
            <li>button</li>
          </ul>
          <h3>交互元素 5个标签</h3>
          <ol>
            <li>details,summary,dialog,menu,menuitem</li>
          </ol>
          </aside>
          <main>
          main 是独一无二的内容
            <article>
              <section>
                <h2>文章</h2>
                <dir> dir 目录元素</dir>
                <pre> pre 预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。</pre>
                <p className={s.p}> p 元素（或者说 HTML 段落元素）表示文本的一个段落。
                  <a href="">超链接</a><br/>
                  <abbr title="">代表缩写</abbr><br/>
                  <bdi> (双向隔离元素) 会隔离可能以不同方向进行格式化的外部文本。</bdi><br/>
                  <bdo dir="rtl">(HTML双向覆盖元素)用于覆盖当前文本的朝向，它使得字符按给定的方向排列。</bdo>
                  <b>粗体</b><br/>
                  <em>需要用户着重阅读的内容</em><br/>
                  <strong>文本十分重要，一般用粗体显示。</strong><br/>
                  <i>用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示</i><br/>
                  <mark>代表突出显示的文字</mark><br/>
                  <small>使文本的字体变小一号,表示边注释和附属细则，包括版权和法律文本。</small><br/>
                  <span>短语内容的通用行内容器,没有任何特殊语义</span><br/>
                  主文本<sub>定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更低并且更小</sub><br/>
                  主文本<sup>定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更高并且更小</sup><br/>
                  <u>使文本在其内容的基线下的一行呈现下划线</u><br/>
                  <time>2018.1.29 用来表示24小时制时间或者公历日期</time><br/>
                  <code>
                    const a = '123';
                  </code><br/>
                  <var>表示变量的名称</var><br/>
                  <wbr/>
                </p>
                <div className={s.div}>div 以下是引言</div>
                <blockquote>blockquote 代表其中的文字是引用内容</blockquote>
                <hr/>
                <figure>
                  <figcaption>figcaption 是与其相关联的图片的说明/标题</figcaption>
                </figure>
              </section>
            </article>
            <section>
              <h2>图片&多媒体</h2>
            </section>
            <hr/>
            <section>
              <h2>表格</h2>
              <table>
                <thead>
                  <tr>
                    <th>标题0</th>
                    <th>标题1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>单元格0</th>
                    <th>单元格1</th>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>foot 单元格0</td>
                    <td>foot 单元格1</td>
                  </tr>
                </tfoot>
              </table>
            </section>
            <hr/>
            <section>
              <h2>表单</h2>
              <form action="">
                <label htmlFor="input">输入框</label>
                <input type="text" id='input'/>
                <select name="" id="">
                  <option value="">选择0</option>
                  <option value="">选择1</option>
                  <optgroup>
                    <option value="">选择2</option>
                    <option value="">选择3</option>
                  </optgroup>
                </select>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <datalist>
                  <option value="">其它选择0</option>
                  <option value="">其它选择1</option>
                </datalist>
                <output>表示计算或用户操作的结果</output>
                <progress>这个是进度条</progress>
                <meter>元素用来显示已知范围的标量值或者分数值</meter>
                <fieldset>
                  <legend>代表一个用于表示它的父元素 fieldset 的内容的标题</legend>
                </fieldset>
                <button>按钮</button>
              </form>
            </section>
            <hr/>
            <section>
              <h2>交互元素</h2>
              <details>元素被用作发现小部件，用户可以从其中检索附加信息。
                <summary>图例</summary>
              </details>
              <dialog>表示一个对话框或其他交互式组件</dialog>
              <menu>
                菜单项
                <menuitem></menuitem>
              </menu>
            </section>
            <hr/>
            <section>
              <h2>web组件</h2>
            </section>
          </main>
        <footer>
          <address>地址</address>
        </footer>
      </div>
    )
  }
}

export default Home;
