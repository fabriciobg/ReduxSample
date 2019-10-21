import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

// import { Container } from './styles';

import * as CourseActions from '../../store/action/courses'

const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button 
                                onClick={() => toggleLesson(module, lesson)}
                            >
                                Selecionar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

const mapStateToProps = state => ({
    modules: state.course.modules
});

// const mapDispatchToProps = dispatch => ({
//     toggleLesson: (module, lesson) => dispatch(CourseAction.toggleLesson(module, lesson))
// })

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
