/*
 * Copyright 2018 Tallence AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import StudioPlugin from "@coremedia/studio-client.main.editor-components/configuration/StudioPlugin";
import IEditorContext from "@coremedia/studio-client.main.editor-components/sdk/IEditorContext";
import Config from "@jangaroo/runtime/Config";
import FormsStudioPlugin from "./FormsStudioPlugin";

interface FormsStudioPluginBaseConfig extends Config<StudioPlugin> {
}

class FormsStudioPluginBase extends StudioPlugin {
  declare Config: FormsStudioPluginBaseConfig;

  constructor(config: Config<FormsStudioPlugin> = null) {
    super(config);
  }

  override init(editorContext: IEditorContext): void {
    super.init(editorContext);

  }

}

export default FormsStudioPluginBase;
