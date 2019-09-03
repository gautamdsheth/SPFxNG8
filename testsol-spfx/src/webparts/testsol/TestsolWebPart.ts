import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'TestsolWebPartStrings';

import 'testsol/dist/testsol/runtime.js';
import 'testsol/dist/testsol/polyfills.js';
import 'testsol/dist/testsol/styles.js';
import 'testsol/dist/testsol/vendor.js';
import 'testsol/dist/testsol/main.js';

export interface ITestsolWebPartProps {
  description: string;
}

export default class TestsolWebPart extends BaseClientSideWebPart<ITestsolWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-testsol-web-part description="${ this.properties.description }"></app-testsol-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
